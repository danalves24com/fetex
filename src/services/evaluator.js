import physics from "../Data/packets/physics"
import statistics from "../Data/packets/statistics";

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

class StatisticsEvluator extends Evaluator {

    evaluate(givens, want) {

        for (var op in statistics) {
            op = statistics[op];
            if (op.return[0] == want) {
                return op;
            }
        }

    }

}


export {
    PhysicsEvaluator,
    StatisticsEvluator
}