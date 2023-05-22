import {Sprint} from "../types";
import {makeAutoObservable} from "mobx";

export default class Sprints {
    _sprints: Sprint[] = [];
    constructor() {
        makeAutoObservable(this);
    }

    setSprints(sprints: Sprint[]) {
        this._sprints = sprints.map(sprint => {
            sprint.is_open = true;
            return sprint;
        });
    }

    get getSprints() {
        return this._sprints;
    }

}

