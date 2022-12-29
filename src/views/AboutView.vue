<template>
<div class="accordion" id="accordionExample">
<div class="accordion-item">
  <h2 class="accordion-header" id="headingOne">
    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      About
    </button>
  </h2>
  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      <strong>This is what to expect</strong>
      This page is going to help you to keep an eye on your shares and those you consider buying! Just register and enter the WKN, current price and name and never miss the perfect time to buy or sell again.
    </div>
  </div>
</div>
<div class="accordion-item">
  <h2 class="accordion-header" id="headingTwo">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      How to use this App
    </button>
  </h2>
  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      <strong>How can you use this app?</strong>
      This is fairly easy. You simply register via the login page. After you registered, you can simply access the data you have recently stored and add some new data on the All Shares page!
          </div>
  </div>
</div>
<div class="accordion-item">
  <h2 class="accordion-header" id="headingThree">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      About the developer
    </button>
  </h2>
  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      <strong>Who developed this App?</strong>
      This application has been developed by Marlene Bültemann, Business Computing Student at HTW Berlin as part of a class project.
    </div>
  </div>
</div>
</div>
</template>

<style>
.accordion-collapse{
  background-color: deepskyblue;
}
.accordion-item{
  font-family: "American Typewriter";
}
</style>
