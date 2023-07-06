import React, { useState, useRef, useEffect } from "react";
import Tools from "./Tools/Tools";
import "./ContainerPaint.scss";

function ContainerPaint() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [fullColor, setFullColor] = useState({
    backgroundColor: "white",
  });

  const [lineColor, setLineColor] = useState("black");
  const [cursorColor, setCursorColor] = useState(lineColor);
  const [lineWidthNew, setLineWidthNew] = useState(5);
  let colorKeeper = lineColor;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidthNew;
    ctxRef.current = ctx;
  }, [lineWidthNew, lineColor, colorKeeper]);

  const checkIfDrawing = useRef(false);

  const mouseMoveListenerRef = useRef(null);
  const mouseDownListenerRef = useRef(null);
  const mouseUpListenerRef = useRef(null);

  const pointRef = useRef(null);
  const colorRef = useRef(null);
  const widthRef = useRef(null);

  useEffect(() => {
    return () => {
      if (mouseMoveListenerRef.current) {
        window.removeEventListener("mousemove", mouseMoveListenerRef.current);
      }
      if (mouseUpListenerRef.current) {
        window.removeEventListener("mouseup", mouseUpListenerRef.current);
      }
    };
  }, [lineColor]);

  function setCanvasRef(ref) {
    if (!ref) return;
    if (canvasRef.current) {
      colorRef.current = colorKeeper;
      canvasRef.current.removeEventListener(
        "mousedown",
        mouseDownListenerRef.current
      );
    }

    canvasRef.current = ref;
    onMouseMove();
    onMouseDown();
    onMouseUp();

    function onMouseMove(e) {
      const mouseMoveListener = (event) => {
        if (checkIfDrawing.current) {
          const cursorPosition = computedCanvas(event.clientX, event.clientY);
          const ctx = canvasRef.current.getContext("2d");
          if (onDraw)
            onDraw(
              ctx,
              cursorPosition,
              pointRef.current,
              colorRef.current,
              widthRef.current
            );
          pointRef.current = cursorPosition;
          colorRef.current = lineColor;
          widthRef.current = lineWidthNew;
        }
      };
      mouseMoveListener.current = mouseMoveListener;
      window.addEventListener("mousemove", mouseMoveListener);
    }

    function onMouseDown() {
      if (!canvasRef.current) return;
      const mouseDownEventListener = () => {
        checkIfDrawing.current = true;
        pointRef.current = null;
        colorRef.current = null;
      };
      mouseDownListenerRef.current = mouseDownEventListener;
      canvasRef.current.addEventListener("mousedown", mouseDownEventListener);
    }

    function onMouseUp() {
      const mouseUpEventListener = () => {
        checkIfDrawing.current = false;
        pointRef.current = null;
        colorRef.current = null;
        widthRef.current = null;
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

    function onDraw(ctx, cursorPosition, pointRef, colorRef) {
      line(pointRef, cursorPosition, ctx, colorRef, widthRef);
    }

    function line(start, end, ctx, colorRef, widthRef) {
      start = start ?? end;
      ref.style.cursor = "display";
      ctx.beginPath();
      ctx.fillStyle = colorRef;
      ctx.lineWidth = widthRef;
      ctx.strokeStyle = colorRef;
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();
      setCursorColor(lineColor);

      ctx.fillStyle = colorRef;
      ctx.strokeStyle = colorRef;
      ctx.lineWidth = widthRef;
      ctx.beginPath();
      ctx.lineCap = "round";
      ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
      ctx.fill();
    }

    return setCanvasRef;
  }

  const eraserHandler = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const widthLineHandler = (width) => {
    setLineWidthNew(width);
  };

  const colorLineHandler = (color) => {
    colorKeeper = color;
    if (colorKeeper !== lineColor) {
      setLineColor(colorKeeper);
    }

    return colorKeeper;
  };
  const bucketHandler = () => {
    setFullColor({ backgroundColor: colorKeeper });
  };

  return (
    <>
      <Tools
        colorLine={colorLineHandler}
        lineWidth={widthLineHandler}
        bucket={bucketHandler}
        eraser={eraserHandler}
      />
      <canvas
        ref={setCanvasRef}
        style={fullColor}
        className="paint__box"
        width={`800px`}
        height={`500px`}
      ></canvas>
    </>
  );
}

export default ContainerPaint;
