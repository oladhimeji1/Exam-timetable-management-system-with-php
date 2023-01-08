var item = document.getElementById('pid')
var destination = document.getElementById('destination')
var country = document.getElementById('country')
var fschedule = document.getElementById('fschedule')
var rschedule = document.getElementById('rschedule')
var ftime = document.getElementById('ftime')
var snum = document.getElementById('snum')
var fdate = document.getElementById('fdate')
var rdate = document.getElementById('rdate')
var phone = document.getElementById('phone')

$('.btn-times').click(()=>{
    $('#contprev').hide(500)
})
$('.item').click(()=>{
    item.innerHTML;
    
    $('#contprev').show(500)
})