import { RefObject, useEffect } from "react";

export function useOnKeyDown(key:string, cb:() => void){
    useEffect(() => {
        const onKeyDown = (event:KeyboardEvent) => {
            if(event.key === "Escape"){
                cb();
            }
        };

        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.removeEventListener("keydown", onKeyDown);
        }
    },[key,cb]);
}

export function useOnClickOutside(elemRef:RefObject<HTMLElement>, cb:() => void){
    useEffect(() => {
        const onClickOutside = (event:MouseEvent | TouchEvent) => {
            if(elemRef.current && event.target instanceof Node && !elemRef.current.contains(event.target)){
                cb();
            }
        }

        document.addEventListener("mousedown", onClickOutside);
        document.addEventListener("touchstart", onClickOutside);

        return () => {
            document.removeEventListener("mousedown", onClickOutside);
            document.removeEventListener("touchstart", onClickOutside);
        }
    },[elemRef, cb])
}