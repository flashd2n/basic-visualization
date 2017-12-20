// slideUp // slideDown for suites
$(() => {
    $('li.passes a').on('click', (ev) => {
        ev.preventDefault();
        console.log('passses');
        $('li.test.fail').fadeOut(500);
        $('li.test.pass').fadeIn(500);
    });

    $('li.failures a').on('click', (ev) => {
        ev.preventDefault();
        console.log('failures');
        $('li.test.fail').fadeIn(500);
        $('li.test.pass').fadeOut(500);
    });

    $('li.allTests a').on('click', (ev) => {
        ev.preventDefault();
        console.log('failures');
        $('li.test.fail').fadeIn(500);
        $('li.test.pass').fadeIn(500);
    });
});