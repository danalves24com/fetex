import React, { Component } from 'react'
import { AddButton, Button1 } from '../components/Buttons.js'
import { Entry, DropDown } from '../components/Misc.js'
import { measures } from '../Data/Units.js';
import $ from 'jquery'
import { PhysicsEvaluator } from '../services/evaluator.js';
var selected = [];
class HomePage extends Component {

    constructor(para) {
        super(para);
    }
    dropTemplate() {
        return (<DropDown Id="given" Items={measures}></DropDown>);
    }
    componentDidMount() {
        $("#given").change(() => {
            console.log("new")
            $("#add").remove();
            $("#givens").html(this.dropTemplate());
            $("#givens").append(<AddButton Id="add"></AddButton>)
        });
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
        window.location.pathname = "/results/" + btoa(pass);

    }
    render() {

        return (
            <>
                <div style={{ marginTop: '30vh' }}>
                    <center>
                        <div class="flex" style={{ marginLeft: '15vw', marginRight: '15vw' }}>
                            <div class="w-2/3">
                                <div class="grid  grid-cols-3 border-b my-8 p-3">
                                    <h2 class="flex items-center justify-center">Given</h2>
                                    <DropDown id="givenAdd" Items={measures}></DropDown>
                                    <Button1 onClick={ this.add } Text="Add"></Button1>
                                </div>
                                <div id="alert">Your given's will appear here</div>
                                <div class="grid grid-cols-4" id="givens">
                                    
                                </div>
                            </div>
                            <div class="flex items-center justify-center w-1/3">
                                <center>
                                    <h2 class="flex items-center justify-center">I want</h2>
                                    <DropDown id="want" Items={measures}></DropDown>
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