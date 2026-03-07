/**
 * Agent Talk Extension
 */
//% color="#D4AF37" icon="\uf11b" weight=100
namespace agentTalk {
    /**
     * Agent tells a message to the player
     */
    //% block="agent tell %message"
    export function tell(message: string): void {
        player.execute(`tell @s §e[Agent]§r ${message}`);
    }
}