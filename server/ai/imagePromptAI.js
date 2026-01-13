"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildImagePrompt = buildImagePrompt;
function buildImagePrompt(menu) {
    return "\nUltra photorealistic food photography.\nFine dining.\nDark background.\nSoft studio lighting.\nNo text. No watermark.\n\nDish:\n".concat(menu.title, "\n\nDescription:\n").concat(menu.description, "\n");
}
