/* 
    API KEY CLASS
*/

//////Old fashion\\\\\\\\

//   $.ajax({
//     url: "http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen",
//     success: data => {
//       console.log(data.Title);
//       $($h3).text(data.Title);
//       $($p).text(data.Year);
//     },
//     error: () => {
//       $($h3).text("bad request");
//     }
//   });

$(() => {
  /*********************************************
    Ajax function:
      => has 3 main components:
            => 1. The url we want to call
            => 2. A success Method
            => 3. A error method

************************************************/

  //Variables:

  const $container = $(".container");
  const $div = $("<div>").addClass("API");
  const $h3 = $("<h3>");
  const $h2 = $("<h2>");
  const $p = $("<p>");
  const $p2 = $("<b>");
  $($container).append($div);
  $($div).append($h2);
  $($div).append($h3);
  $($div).append($p);
  $($div).append($p2);

  $("form").on("submit", () => {
    event.preventDefault();

    const userInput = $(`input[type='text']`).val();

    $($h2).css("border-bottom", "2px solid #aeadad");
    $($h3).css("border-bottom", "1px solid #aeadad");
    $($p).css("border-bottom", "1px solid #aeadad");
    $($p2).css("margin", "1vw");

    $.ajax({
      url: `http://www.omdbapi.com/?apikey=53aa2cd6&t=${userInput}`

      // //add a method called .then(()=>{}); at the end of he ajax
    }).then(
      data => {
        console.log(data);

        $($h2).text(`Title: ${data.Title}`);
        $($h3).text(`Year: ${data.Year}`);
        $($p).text(`Rated: ${data.Rated}`);
        $($p2).text(` ${data.Plot}`);
      },
      () => {
        console.log("bad request");
      }
    );
  });
});
