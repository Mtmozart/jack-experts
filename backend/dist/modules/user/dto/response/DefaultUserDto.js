"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultUserClientDto = void 0;
class DefaultUserClientDto {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.username = user.username;
        this.cep = user.address.cep;
        this.state = user.address.state;
        this.country = user.address.country;
        this.neighborhood = user.address.neighborhood;
        this.city = user.address.city;
        this.street = user.address.street;
        this.number = user.address.number;
        this.complement = user.address.complement;
    }
}
exports.DefaultUserClientDto = DefaultUserClientDto;
//# sourceMappingURL=DefaultUserDto.js.map