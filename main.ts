//% color="#D4AF37" icon="\uf132" block="Agent Communication"
namespace agentComm {

    //% blockId="agentcomm_tell_msg"
    //% block="agent tell player %message"
    //% message.defl="สวัสดี"
    //% weight=100
    export function agentTell(message: string): void {
        player.say("§e[Agent] §f" + message)
    }

    //% blockId="agentcomm_report_pos_msg"
    //% block="agent report position"
    //% weight=90
    export function agentReportPosition(): void {
        const pos = agent.getPosition();
        const msg = "ฉันอยู่ที่: " + pos.getValue(Axis.X) + ", " + pos.getValue(Axis.Y) + ", " + pos.getValue(Axis.Z)
        player.say("§e[Agent] §f" + msg)
    }
}