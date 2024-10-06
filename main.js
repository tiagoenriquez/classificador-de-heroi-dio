const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

const reader = readline.createInterface({ input, output });

/**
 * 
 * @param {string} instrucao 
 * @returns {Promise<string>}
 */
async function ler(instrucao) {
    const valor = await reader.question(instrucao);
    return valor;
}

/**
 * 
 * @param {number} xp 
 * @returns {string}
 */
function obterNivel(xp) {
    if (xp < 1000) return 'Ferro';
    if (xp >= 1001 && xp <= 2000) return 'Bronze';
    if (xp >= 2001 && xp <= 5000) return 'Prata';
    if (xp >= 5001 && xp <= 7000) return 'Ouro';
    if (xp >= 7001 && xp <= 8000) return 'Platina';
    if (xp >= 8001 && xp <= 9000) return 'Ascendente';
    if (xp >= 9001 && xp <= 10000) return 'Imortal';
    if (xp >= 10001) return 'Radiante';
}

async function main() {
    const nome = await ler('Digite o nome do herói: ');
    const xp = Number(await ler('Digite o XP do herói: '));
    const nivel = obterNivel(xp);
    console.log(`O herói de nome ${nome} está no nível de ${nivel}.`);
    reader.close();
}

main();