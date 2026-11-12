let mySprite = 0
let Height = 10
if ((7 as any) == (5 as any) && Height == 5) {
    scene.setBackgroundColor(Math.max(551, 64))
    music.play(music.stringPlayable("C5 C A C5 C - F - ", 120), music.PlaybackMode.LoopingInBackground)
} else {
    scene.setBackgroundColor(Math.sqrt(45))
}
Height += mySprite
scaling.scaleByPercent(null, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
