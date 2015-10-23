<script type="text/javascript">
$(function() {
    var n = window.location.href.slice(window.location.href.indexOf('?') + 4);
    var p = $("#gold h3").offset().top;
    $('html,body').animate({ scrollTop: p }, 'slow');
    return false;
});
</script>
