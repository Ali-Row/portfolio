$(document).ready(() => {
    AOS.init();
  $(".body-transition").hide();

  let renderAnimation = () => {
    intro = $("<h1>");
    intro.addClass("space-mono accent-color px-18 skew rounded animated zoomInUp slow intro-element");
    intro.text("A");
    let container = $("<div>");
    container.addClass("lead-container");
    let row = $("<div>");
    row.addClass("row text-center d-flex justify-content-center");
    let col = $("<div>");
    col.addClass("col-md-12 d-flex justify-content-center");
    col.append(intro);
    row.append(col);
    container.append(row);
    $("body").append(container);
  };
  renderAnimation();

  let addZoomOut = () => {
    intro.addClass("animated zoomOut blur");
  };

  // Renders the portfolio, this runs after the intro animation is over
  let renderPortfolio = () => {
    $(".intro-element").hide();
    $(".body-transition").show();
  };
  // These setTimeouts call the addZoomOut function first then finally the renderPortfolio function
  addZoomOutClass = setTimeout(addZoomOut, 3000);
  show = setTimeout(renderPortfolio, 4300);
});
