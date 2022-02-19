$(document).ready(function () {
  window.shperoSelection = "standard";
  // Server Locations
  $(".select-locations-btn").on("click", function () {
    let pid1 = $(this).attr("data-pid"),
      pid2 = $(this).attr("data-pid2");
    $(".server-locations .locations .location").each(function (i, loc) {
      var url = new URL($(loc).attr("href"));
      if ($(this).attr("data-location-type") == "st") {
        url.searchParams.set("pid", pid1);
        $(loc).attr("href", url.toString().replace("pid=13", "pid=" + pid1));
      } else {
        url.searchParams.set("pid", pid2);
        $(loc).attr("href", url.toString().replace("pid=13", "pid=" + pid2));
      }
    });
  });
  // Toggle Price Global [Upgrade Page]
  $(".toggle-plan-global").on("change", function () {
    if (this.checked) {
      shperoSelection = "premium";
      $(".popular-plans .content .item .monthly-price").css("display", "none");
      $(".popular-plans .content .item .yearly-price").css("display", "block");
      $(".annual-plan-btn").addClass("active-btn");
      $(".monthly-plan-btn").removeClass("active-btn");
      // Hide Standard
      $(".standard-block-area").hide();
      // CPU Toggle
      $(".sp-premium").show();
      $(".sp-standard").hide();
    } else {
      shperoSelection = "standard";
      $(".popular-plans .content .item .monthly-price").css("display", "block");
      $(".popular-plans .content .item .yearly-price").css("display", "none");
      $(".annual-plan-btn").removeClass("active-btn");
      $(".monthly-plan-btn").addClass("active-btn");
      // Show Standard
      $(".standard-block-area").show();
      // Hide Primary
      $(".premium-block-area").show();
      // CPU Toggle
      $(".sp-premium").hide();
      $(".sp-standard").show();
    }
  });
});
