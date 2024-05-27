<script>
  import intersection from 'svelte-intersection-observer-directive';

  let intersecting;
  let intersecting2;

  function handleEnterViewport() {
    console.log('Element has entered the viewport');
    intersecting = true;
  }

  function handleExitViewport() {
    console.log('Element has exited the viewport');
    intersecting = false;
  }
  function handleEnterViewport2() {
    console.log('Element has entered the viewport');
    intersecting2 = true;
  }

  function handleExitViewport2() {
    console.log('Element has exited the viewport');
    intersecting2 = false;
  }
</script>

<header class:intersecting>
	  {intersecting ? 'Element is in view' : 'Element is not in view'}
</header>
<header2 class:intersecting2>
  {intersecting2 ? 'Element2 is in view' : 'Element2 is not in view'}
</header2>


<div
  use:intersection={{ threshold: 0.5, once: true }}
  on:enterViewport={handleEnterViewport}
  on:exitViewport={handleExitViewport}>
  Hello world
</div>
<br />
<div
  use:intersection={{ threshold: 0.5 }}
  on:enterViewport={handleEnterViewport2}
  on:exitViewport={handleExitViewport2}>
  Hello world2
</div>

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    background-color: #e0f7f6;
  }
	 header2 {
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    padding: 1rem;
    background-color: #e0f7f6;
  }

  div {
    margin-top: calc(100vh + 1px);
    height: 38vh;
    padding: 1rem;
    background-color: #376462;
    color: #fff;
  }

  header:before,header2:before {
    content: 'Scroll down.';
    display: block;
    color: #111;
  }

  header,header2 {
    font-weight: bold;
    color: #d54309;
  }

  header.intersecting, header2.intersecting2 {
    color: #00a91c;
  }
</style>
