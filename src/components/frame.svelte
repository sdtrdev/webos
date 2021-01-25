<script>
  export let left = 30;
  export let top = 50;
  export let width = 300;
  export let height = 300;

  const DIRECTONS = {
    RIGHT: "right",
    LEFT: "left",
    BOTTOM: "bottom",
    TOP: "TOP",
    BOTTOM_RIGHT: "bottom_right",
  };

  let moving = false;
  let direction = null;

  let mouseEvent = null;
  let panel = null;

  function startMoving() {
    moving = true;
  }

  function stop() {
    moving = false;
    direction = null;
  }

  function startReize(_direction) {
    direction = _direction;
  }

  function move(e) {
    mouseEvent = e;
  }

  $: if (direction === DIRECTONS.RIGHT) {
    let diff = mouseEvent.clientX - panel.offsetLeft;
    width = diff;
  }

  $: if (direction === DIRECTONS.LEFT) {
    /*     const cwidth = getComputedStyle(panel)
      .getPropertyValue("width")
      .replace("px", "");
    console.log(mouseEvent.clientX, cwidth, panel.offsetLeft);

    if (cwidth > 200) {
      width = parseFloat(cwidth) - (mouseEvent.pageX - panel.offsetLeft);
      left = mouseEvent.pageX;
    } */
    /*      left = mouseEvent.clientX; */
    /*     width = parseInt(width) - (mouseEvent.clientX - panel.offsetLeft); */
  }

  $: if (direction === DIRECTONS.BOTTOM) {
    let diff = mouseEvent.clientY - panel.offsetTop;
    height = diff;
  }

  $: if (direction === DIRECTONS.BOTTOM_RIGHT) {
    let wdiff = mouseEvent.clientX - panel.offsetLeft;
    let hdiff = mouseEvent.clientY - panel.offsetTop;
    width = wdiff;
    height = hdiff;
  }

  $: if (moving) {
    left += mouseEvent.movementX;
    top += mouseEvent.movementY;
  }
</script>

<svelte:window on:mouseup={stop} on:mousemove={move} />

<section
  style="left: {left}px; top: {top}px; width: {width}px; height: {height}px"
  class="draggable"
  bind:this={panel}
>
  <div on:mousedown={startMoving} class="header">kapat</div>
  <span
    on:mousedown={() => startReize(DIRECTONS.RIGHT)}
    class="resize resize-right"
  />
  <span
    on:mousedown={() => startReize(DIRECTONS.BOTTOM)}
    class="resize resize-bottom"
  />

  <span
    on:mousedown={() => startReize(DIRECTONS.BOTTOM_RIGHT)}
    class="resize resize-bottom-right"
  />

  <span
    on:mousedown={() => startReize(DIRECTONS.LEFT)}
    class="resize resize-left"
  />

  <slot />
</section>

<style type="text/scss">
  .draggable {
    user-select: none;
    position: absolute;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;

    .header {
      cursor: move;
      background-color: cadetblue;
    }

    .resize {
      position: absolute;
      &-right {
        height: 100%;
        right: 0;
        top: 0;
        width: 5px;
        background-color: red;
      }
      &-bottom {
        width: 100%;
        left: 0;
        bottom: 0;
        height: 5px;
        background-color: blue;
      }

      &-left {
        height: 100%;
        left: 0;
        top: 0;
        width: 5px;
        background-color: hotpink;
      }

      &-bottom-right {
        width: 20px;
        height: 20px;
        bottom: 0;
        right: 0;
        background-color: green;
      }
    }
  }
</style>
