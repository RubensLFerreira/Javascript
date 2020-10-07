var agora = new Date()
var hora = agora.getHours

if (hora < 12) {
    console.log('Esta de manhâ')
} else if (hora >= 12 || hora < 18) {
    console.log('Está de tarde')
} else (
    console.log('Está de noite')
)