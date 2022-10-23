export default function LoadingSvg() {
    return(
        <svg style="margin: auto; background: rgb(241, 242, 243); display: block; shape-rendering: auto;" 
        width="200px" 
        height="200px" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" r="32" 
        stroke-width="8" stroke="#df1317" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round">
          <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
        </circle>
        </svg>
    );
}