const mode_toggle = F( '#mode-change' );

mode_toggle.onclick = () => {
    console.log( mode_toggle );
    if ( document.body.classList.contains( 'dark' ) ) {
        mode_toggle.setAttribute( 'stroke', '#fff' );
        mode_toggle.setAttribute( 'fill', '#000' );
        document.body.classList.remove( 'dark' );
    } else {
        mode_toggle.setAttribute( 'stroke', '#000' );
        mode_toggle.setAttribute( 'fill', 'none' );
        document.body.classList.add( 'dark' );
    }
};