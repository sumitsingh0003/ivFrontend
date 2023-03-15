import { LOADINGFALSE, LOADINGTRUE } from "./actionType";

export const loadingTrue = () => ({
    type: LOADINGTRUE,
});
export const loadingFalse = () => ({
    type: LOADINGFALSE
});