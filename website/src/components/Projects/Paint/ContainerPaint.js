import React, { useState, useRef, useEffect } from "react";
import Tools from "./Tools/Tools";
import "./ContainerPaint.css";

function ContainerPaint() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [fullColor, setFullColor] = useState({
    backgroundColor: "white",
  });
  const [lineColor, setLineColor] = useState("black");
  const [lineWidth, setLineWidth] = useState(5);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;
  }, [lineColor, lineWidth]);

  const checkIfDrawing = useRef(false);

  const mouseMoveListenerRef = useRef(null);
  const mouseDownListenerRef = useRef(null);
  const mouseUpListenerRef = useRef(null);

  const pointRef = useRef(null);

  useEffect(() => {
    return () => {
      if (mouseMoveListenerRef.current) {
        window.removeEventListener("mousemove", mouseMoveListenerRef.current);
      }
      if (mouseUpListenerRef.current) {
        window.removeEventListener("mouseup", mouseUpListenerRef.current);
      }
    };
  }, []);

  function setCanvasRef(ref) {
    if (!ref) return;
    if (canvasRef.current) {
      canvasRef.current.removeEventListener(
        "mousedown",
        mouseDownListenerRef.current
      );
    }

    canvasRef.current = ref;
    onMouseMove();
    onMouseDown();
    onMouseUp();

    function onMouseMove() {
      const mouseMoveListener = (event) => {
        if (checkIfDrawing.current) {
          const cursorPosition = computedCanvas(event.clientX, event.clientY);
          const ctx = canvasRef.current.getContext("2d");
          if (onDraw) onDraw(ctx, cursorPosition, pointRef.current);
          pointRef.current = cursorPosition;
          console.log(cursorPosition);
        }
      };
      mouseMoveListener.current = mouseMoveListener;
      window.addEventListener("mousemove", mouseMoveListener);
    }

    function onMouseDown() {
      if (!canvasRef.current) return;
      const mouseDownEventListener = () => {
        checkIfDrawing.current = true;
      };
      mouseDownListenerRef.current = mouseDownEventListener;
      canvasRef.current.addEventListener("mousedown", mouseDownEventListener);
    }

    function onMouseUp() {
      const mouseUpEventListener = () => {
        checkIfDrawing.current = false;
        pointRef.current = null;
      };
      mouseUpListenerRef.current = mouseUpEventListener;
      canvasRef.current.addEventListener("mouseup", mouseUpEventListener);
    }

    function computedCanvas(clientX, clientY) {
      if (canvasRef.current) {
        const offsetRect = canvasRef.current.getBoundingClientRect();
        return {
          x: clientX - offsetRect.left,
          y: clientY - offsetRect.top,
        };
      } else {
        return null;
      }
    }

    return setCanvasRef;
  }

  function onDraw(ctx, cursorPosition, pointRef) {
    line(pointRef, cursorPosition, ctx, lineColor, 5);
  }

  function line(start, end, ctx, lineColor, width) {
    start = start ?? end;
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = lineColor;
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();

    ctx.fillStyle = lineColor;
    ctx.beginPath();
    ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  // function handleMouseDown(event) {
  //   if (tool === "bucket" && draw === true) {
  //     const newColor = { ...fullColor, backgroundColor: color };
  //     setFullColor(newColor);
  //   }
  // }
  // function handleClickEraser() {
  //   if (tool === "eraser") {
  //     setFullColor({ ...fullColor, backgroundColor: "white" });
  //   }
  // }

  return (
    <>
      <Tools setLineColor={setLineColor} setLineWidth={setLineWidth} />
      <canvas
        ref={setCanvasRef}
        style={fullColor}
        className="paint__box"
        // onClick={handleClickEraser}
        width={`800px`}
        height={`500px`}
      ></canvas>
    </>
  );
}

export default ContainerPaint;