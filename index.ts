// Import stylesheets
import "./style.css";

// RxJS v6+
import { fromEvent } from "rxjs";
import { throttleTime, tap } from "rxjs/operators";

const indicator = document.getElementById("indication");

const body = document.body,
  html = document.documentElement;
console.log(indicator);

const getScrollPercentage = () => {
  const winScroll = body.scrollTop || html.scrollTop;
  const height = html.scrollHeight - html.clientHeight;
  return (winScroll / height) * 100;
};

const setScrollWidth = _ =>
  (indicator.style.width = getScrollPercentage() + "%");

fromEvent(document, "scroll")
  .pipe(throttleTime(20))
  .subscribe(setScrollWidth);
