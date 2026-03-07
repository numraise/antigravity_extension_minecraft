//% color="#D4AF37" icon="\uf11b" block="Agent Communication"
namespace agentComm {

    /**
     * ให้ Agent ส่งข้อความ
     * @param message ข้อความ, eg: "สวัสดี"
     */
    //% blockId="agentcomm_tell"
    //% block="agent tell %message"
    //% weight=100
    export function agentTell(message: string): void {
        player.say("§e[Agent] §f" + message)
    }

    /**
     * รายงานพิกัด
     */
    //% blockId="agentcomm_pos"
    //% block="agent report position"
    //% weight=90
    export function agentReportPosition(): void {
        let pos = agent.getPosition();
        let msg = "ฉันอยู่ที่: " + pos.getValue(Axis.X) + ", " + pos.getValue(Axis.Y) + ", " + pos.getValue(Axis.Z)
        player.say("§e[Agent] §f" + msg)
    }
}