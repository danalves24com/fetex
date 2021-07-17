import React, { Component } from 'react'
import { AddButton, Button1, NavBarButton } from '../components/Buttons.js'
import { Entry, DropDown } from '../components/Misc.js'
import { physicsItems, statisticsItems, physicsRef } from '../Data/Units.js';
import $ from 'jquery'
import { PhysicsEvaluator } from '../services/evaluator.js';
import physics from '../Data/packets/physics.js';
import statistics from '../Data/packets/statistics.js';

var selected = [], type;
function avalible(all) {
    var have = [], lst = []
    switch (type) {
        case "physics":
            lst = physics;
            break;
        case "statistics":
            lst = statistics;
            break;
    }
    for (var h in lst) {
        have.push(lst[h].return[0]);
    }

    return have;
}
class HomePage extends Component {

    constructor(para) {
        super(para);
        type = para.match.params.or;
        console.log(physicsRef())
        switch (para.match.params.or) {
            case "physics":
                this.state = physicsItems()
                break;
            case "statistics":
                this.state = statisticsItems
                break;
            case "math":
                this.state = physicsItems()
                break;
            default:
                this.state = physicsItems()
                type="physics"
                break;
        }
        console.log();
    }
    add() {
        var g = $("#givenAdd").val();
        $("#alert").hide();
        if (!selected.includes(g)) {            
            $("#givens").append(`<h3 class="text-center border rounded m-2 p-2">${g}</h3>`)
            selected.push(g);
        }
        else {

        }
        $("#givenAdd").val("")
    }
    
    compile() {
        var pass = JSON.stringify([selected, $("#want").val()])
        window.location.pathname = "/results/" + btoa(pass) + "/" + type;

    }
    render() {

        return (
            <>
                <div>
                    <NavBarButton onClick={() => { window.location.pathname = "/statistics" }} live={this.props.match.params.or == "statistics"} Text="Statistics"></NavBarButton>
                    <NavBarButton onClick={() => { window.location.pathname = "/physics" }} live={this.props.match.params.or == "physics"} Text="Physics"></NavBarButton>
                    <NavBarButton onClick={() => { window.location.pathname = "/math" }} live={this.props.match.params.or == "math"} Text="Math"></NavBarButton>
                </div>
                <div style={{ marginTop: '30vh' }}>
                    <center>
                        <div class="flex" style={{ marginLeft: '15vw', marginRight: '15vw' }}>
                            <div class="w-2/3">
                                <div class="grid  grid-cols-3 border-b my-8 p-3">
                                    <h2 class="flex items-center justify-center">Given</h2>
                                    <DropDown id="givenAdd" Items={this.state}></DropDown>
                                    <Button1 onClick={ this.add } Text="Add"></Button1>
                                </div>
                                <div id="alert">Your given's will appear here, but you do not need to select them</div>
                                <div class="grid grid-cols-4" id="givens">
                                    
                                </div>
                            </div>
                            <div class="flex items-center justify-center w-1/3">
                                <center>
                                    <h2 class="flex items-center justify-center">I want</h2>
                                    <DropDown id="want" Items={avalible(this.state)}></DropDown>
                                </center>
                            </div>
                        </div>
                        <div class="my-10">
                            <Button1 onClick={ this.compile } Text="Go"></Button1>
                        </div>
                    </center>
                </div>
            </>
        );

    }
}

export default HomePage;