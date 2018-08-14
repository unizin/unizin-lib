/* @flow */

export default function capitalize(str: string): string {
    if (!str.length) {
        return str;
    }
    return str[0].toUpperCase() + str.substring(1);
}
