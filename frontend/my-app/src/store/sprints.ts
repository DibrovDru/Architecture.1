import {Sprint} from "../types";
import {makeAutoObservable} from "mobx";

export default class Sprints {
    sprints: Sprint[] = [];
    constructor() {
        makeAutoObservable(this);
    }

    setSprints(sprints: Sprint[]) {
        this.sprints = sprints;
    }
}

