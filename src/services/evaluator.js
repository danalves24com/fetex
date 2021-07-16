import physics from "../Data/packets/physics"

class Evaluator {
    evaluate(givens, want) {

    }
}



class PhysicsEvaluator extends Evaluator {

    evaluate(givens, want) {
        
        for (var op in physics) {
            op = physics[op];
            if (op.return[0] == want) {
                return op;
            }
        }

    }

}


export {
    PhysicsEvaluator
}