const { GetName } = require("@hugobernardoni/test-package");

function main() {
    var name = GetName("Hugo");
    console.log(name);
}

main();