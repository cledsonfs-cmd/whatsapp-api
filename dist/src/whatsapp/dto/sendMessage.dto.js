"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendReactionDto = exports.SendContactDto = exports.ContactMessage = exports.SendLocationDto = exports.AudioMessageFileDto = exports.SendAudioDto = exports.MediaFileDto = exports.SendMediaDto = exports.MediaMessage = exports.SendTextDto = exports.Metadata = exports.Options = void 0;
class Options {
}
exports.Options = Options;
class OptionsMessage {
}
class Metadata extends OptionsMessage {
}
exports.Metadata = Metadata;
class TextMessage {
}
class SendTextDto extends Metadata {
}
exports.SendTextDto = SendTextDto;
class MediaMessage {
}
exports.MediaMessage = MediaMessage;
class SendMediaDto extends Metadata {
}
exports.SendMediaDto = SendMediaDto;
class MediaFileDto extends Metadata {
}
exports.MediaFileDto = MediaFileDto;
class Audio {
}
class SendAudioDto extends Metadata {
}
exports.SendAudioDto = SendAudioDto;
class AudioMessageFileDto extends Metadata {
}
exports.AudioMessageFileDto = AudioMessageFileDto;
class Button {
}
class LocationMessage {
}
class SendLocationDto extends Metadata {
}
exports.SendLocationDto = SendLocationDto;
class ContactMessage {
}
exports.ContactMessage = ContactMessage;
class SendContactDto extends Metadata {
}
exports.SendContactDto = SendContactDto;
class ReactionMessage {
}
class SendReactionDto {
}
exports.SendReactionDto = SendReactionDto;
