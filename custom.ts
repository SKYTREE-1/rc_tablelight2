
/**
 * このファイルを使って、独自の関数やブロックを定義してください。
 * 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
 */

enum Color {
    //% block="赤"
    Red = 0,
    //% block="青"
    Blue = 1,
    //% block="緑"
    Green = 2,
    //% block="橙"
    Orange = 3,
    //% block="碧"
    Emerald = 4,
    //% block="藍"
    Indigo = 5,
    //% block="黄"
    Yellow = 6,
    //% block="水"
    Aqua = 7,
    //% block="紫"
    Purple = 8,
    //% block="空"
    Sky = 9,
    //% block="桃"
    Pink = 10,
    //% block="白"
    White = 11,
    //% block="電球色"
    Light = 12
}

enum Mode {
    //% block="普通"
    Flash = 0,
    //% block="スムーズ"
    Smooth = 1,
    //% block="ゆっくり"
    Fade = 2,
    //% block="ストロボ"
    Strobo = 3
}

/**
 * カスタムブロック
 */
//% weight=100 color=#87cefa icon="⚲"
//namespace 赤外線リモコン {
namespace rc_tablelight {
    let on:         number[]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1] //on:
//    let no:         number[]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1] //off:
    let off:        number[]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1] //flash:
    let red:        number[]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1] //strobe:
    let green:      number[]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1] //fade:
    let blue:       number[]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1] //smooth:
    let light:      number[]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1] //white:
    let sky:        number[]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1] //red:
    let aqua:       number[]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1] //green:
    let emerald:    number[]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1] //blue:
    let indigo:     number[]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1] //orange:
    let purple:     number[]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1] //emerald:
    let pink:       number[]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1] //indigo:
    let white:      number[]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1] //yellow:
    let fade:       number[]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1] //aqua:
    let jump:       number[]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1] //purple:
    let smooth:     number[]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1] //light:
//    let down:       number[]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1] //sky:
//    let up:         number[]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1]  //pink:

    /**
     * 発信します。
     */
    export function remortc(ll:number[]){
        let r:number
        basic.pause(100)
        for (let n = 0; n < 2; n++) {
            /* リーダーコード */
            
            r=8800
            while (r > 26) {
                    pins.digitalWritePin(DigitalPin.P1, 1)
                    control.waitMicros(2)
                    pins.digitalWritePin(DigitalPin.P1, 0)
                    r = r - 26
            }
            control.waitMicros(4400)
            for (let i = 0; i <= ll.length - 1; i++) {
                r = 550
                 while (r > 26) {
                    pins.digitalWritePin(DigitalPin.P1, 1)
                    control.waitMicros(2)
                    pins.digitalWritePin(DigitalPin.P1, 0)
                    r = r - 26
                }
                
                // Generate flashing signal
                if (ll[i] == 1) {
                    // LED flashes at 38 kHz cycle
                    control.waitMicros(1650)
                } else {
                    // LED flashes at 38 kHz cycle
                    control.waitMicros(550)
                }
            }
             r = 550
            while (r > 26) {
                pins.digitalWritePin(DigitalPin.P1, 1)
                control.waitMicros(2)
                pins.digitalWritePin(DigitalPin.P1, 0)
                r = r - 26
            }　/* ストップビット */
        }

    };

    /**
    * ライトの電源をONにします。
    */
    //% block
    export function ライトを点ける(): void {
        let r = 0
        let list: number[] = []
        
        list = on
        remortc(list)
        basic.showString("1")
        basic.pause(100)
        basic.clearScreen()
    }

    /**
    * ライトの電源をOFFにします。
    */
    //% block
    export function ライトを消す(): void {
        let r = 0
        let list: number[] = []

        list = off
        remortc(list);
        basic.showString("0")
        basic.pause(100)
        basic.clearScreen()
    }

    /**
    * ライトの色を白にしてからライトの電源をOFFにします。
    */
    //% block
    export function 白にしてライトを消す(): void {
        let r = 0
        let list: number[] = []

        for (let w = 0; w < 2; w++) {
            if (w == 0) list = white
            else list = off
            basic.pause(200)
            remortc(list)
            if (w == 0) basic.showString("W")
            basic.pause(200)
        }
        basic.showString("0")
        basic.pause(100)
        basic.clearScreen()
    }

    /**
    * ライトの色を以下の色に変更します。
    * 赤、青、緑、橙、碧、藍、黄、水、紫、空、桃、白、電球
    * 変更した色の情報を以下のように画面に表示します。
    * "R", "B", "G", "O", "L", "I", "Y", "A", "Pu", "S", "Pi", "W", "L"
    * @param e 選択する色
    */
    //% block
    export function 色を変える(e: Color): void {
        let r = 0
        let list: number[] = []

        basic.pause(100)
        if (e == 0)         list = red
        else if (e == 1)    list = blue
        else if (e == 2)    list = green
        else if (e == 3)    list = orange
        else if (e == 4)    list = emerald
        else if (e == 5)    list = indigo
        else if (e == 6)    list = yellow
        else if (e == 7)    list = aqua
        else if (e == 8)    list = purple
        else if (e == 9)    list = sky
        else if (e == 10)   list = pink
        else if (e == 11)   list = white
        else if (e == 12)   list = light

        remortc(list)
    
        if (e == 0)         basic.showString("R")
        else if (e == 1)    basic.showString("B")
        else if (e == 2)    basic.showString("G")
        else if (e == 3)    basic.showString("O")
        else if (e == 4)    basic.showString("E")
        else if (e == 5)    basic.showString("I")
        else if (e == 6)    basic.showString("Y")
        else if (e == 7)    basic.showString("A")
        else if (e == 8)    basic.showString("Pu")
        else if (e == 9)    basic.showString("S")
        else if (e == 10)   basic.showString("Pi")
        else if (e == 11)   basic.showString("W")
        else if (e == 12)   basic.showString("L")
        basic.pause(100)
        basic.clearScreen()
    }

    /**
    * ライトの色を以下のパターンで点滅させます。
    * 普通、早く、ゆっくり、ストロボ
    */
    //% block
    export function グラデーション(e: Mode): void {
        let r = 0
        let list: number[] = []

        basic.pause(100)
        if (e == 0)         list = flash
        else if (e == 1)    list = fade
        else if (e == 2)    list = strobe
        else if (e == 3)    list = smooth

        remortc(list)

        if (e == 0)         basic.showString("N") // Normal
        else if (e == 1)    basic.showString("F") // Fast
        else if (e == 2)    basic.showString("L") // Late
        else if (e == 3)    basic.showString("S") // Strobo
        basic.pause(100)
        basic.clearScreen()
    }
}
