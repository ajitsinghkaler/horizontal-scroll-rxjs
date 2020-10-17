// Import stylesheets
import "./style.css";

// RxJS v6+
import { fromEvent } from "rxjs";
import { throttleTime, tap, debounceTime } from "rxjs/operators";

const indicator = document.getElementById("indication");

const html = document.documentElement;

const getScrollPercentage = () => {
  const winScroll = html.scrollTop;
  const height = html.scrollHeight - html.clientHeight;
  return (winScroll / height) * 100;
};

fromEvent(document, "scroll")
  .pipe(
    debounceTime(20),
    tap(() => console.count("debounceTime"))
    // tap(_ => (indicator.style.width = getScrollPercentage() + "%"))
  )
  .subscribe();
fromEvent(document, "scroll")
  .pipe(
    throttleTime(20),
    tap(() => console.count("throttleTime"))
    // tap(_ => (indicator.style.width = getScrollPercentage() + "%"))
  )
  .subscribe();
