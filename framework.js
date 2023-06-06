function expect(current) {

    return {
        toBe(expect) {
            if(current !== expect) {
                throw new Error("Test was not successfull");
            }
        }
    }
}

function it(title, callback) {
    try {
        callback();
        console.log(`✅ ${title}`);
    } catch (error) {
        console.error(`❎ ${title}`);
    }
}

module.exports = { 
    expect,
    it
}