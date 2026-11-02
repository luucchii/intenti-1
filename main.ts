input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    music.play(music.stringPlayable("F C5 A E B G D - ", 1), music.PlaybackMode.UntilDone)
    basic.showNumber(0)
})
basic.forever(function () {
	
})
