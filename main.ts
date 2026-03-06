/**
 * Extension สำหรับควบคุม Agent ให้สื่อสารกับผู้เล่น
 */
//% color="#D4AF37" icon="\uf11b" block="Agent Communication"
namespace agentComm {

    /**
     * สั่งให้ Agent ส่งข้อความส่วนตัว (tell) กลับมาที่ผู้เล่น
     * @param message ข้อความที่ต้องการส่ง
     */
    //% block="agent tell player %message"
    //% message.defl="ภารกิจเสร็จสิ้นแล้ว!"
    export function agentTellPlayer(message: string): void {
        // ใช้คำสั่ง /tell @p ซึ่ง @p จะหมายถึงผู้เล่นที่รันโค้ดนี้ (เจ้าของ Agent)
        // ใส่ชื่อ [Agent] ข้างหน้าเพื่อให้รู้ว่าข้อความมาจาก Agent
        player.execute(`tell @p [Agent]: ${message}`)
    }

    /**
     * สั่งให้ Agent กระซิบรายงานพิกัดตัวเอง
     */
    //% block="agent report position"
    export function agentReportPosition(): void {
        let pos = agent.getPosition()
        let msg = `ฉันอยู่ที่พิกัด: ${pos.getValue(Axis.X)}, ${pos.getValue(Axis.Y)}, ${pos.getValue(Axis.Z)}`
        player.execute(`tell @p [Agent]: ${msg}`)
    }
}