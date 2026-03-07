/**
 * Agent Communication ให้ Agent ส่งข้อความหาผู้เล่นและแจ้งพิกัด
 */
//% color="#D4AF37" icon="\uf11b" block="Agent Communication"
namespace agentComm {

    /**
     * สั่งให้ Agent ส่งข้อความ (tell) กลับมาที่ผู้เล่นที่รันโค้ด
     * @param message ข้อความที่ต้องการส่ง, eg: "ภารกิจเสร็จสิ้น!"
     */
    //% blockId="agentcomm_tell_player"
    //% block="agent tell player %message"
    //% weight=100
    export function agentTellPlayer(message: string): void {
        player.execute(`tell @s §e[Agent]§r ${message}`);
    }

    /**
     * สั่งให้ Agent รายงานพิกัดตัวเองมาทางแชท
     */
    //% blockId="agentcomm_report_pos"
    //% block="agent report position"
    //% weight=90
    export function agentReportPosition(): void {
        let pos = agent.getPosition();
        let msg = `ฉันอยู่ที่พิกัด: ${pos.getValue(Axis.X)}, ${pos.getValue(Axis.Y)}, ${pos.getValue(Axis.Z)}`;
        player.execute(`tell @s §e[Agent]§r ${msg}`);
    }
}