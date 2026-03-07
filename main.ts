/**
 * Agent communication extension for Minecraft
 */
//% weight=100 color="#D4AF37" icon="\uf11b" block="AgentComm"
namespace agentComm {

    /**
     * สั่งให้ Agent ส่งข้อความส่วนตัว (tell) กลับมาที่ผู้เล่น
     * @param message ข้อความที่ต้องการส่ง
     */
    //% block="agent tell player $message"
    //% message.defl="ภารกิจเสร็จสิ้นแล้ว!"
    export function agentTellPlayer(message: string): void {
        // ใช้คำสั่ง /tell @s ซึ่ง @s จะหมายถึงผู้เล่นที่รันโค้ดนี้ (เจ้าของ Agent) 
        // วิธีนี้สามารถใช้ได้แม้ผู้เล่นจะเป็นแค่ระดับ Member ก็ตาม
        player.execute(`tell @s §e[Agent]§r ${message}`);
    }

    /**
     * สั่งให้ Agent กระซิบรายงานพิกัดตัวเอง
     */
    //% block="agent report position"
    export function agentReportPosition(): void {
        let pos = agent.getPosition();
        let msg = `ฉันอยู่ที่พิกัด: ${pos.getValue(Axis.X)}, ${pos.getValue(Axis.Y)}, ${pos.getValue(Axis.Z)}`;
        player.execute(`tell @s §e[Agent]§r ${msg}`);
    }
}