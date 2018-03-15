// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {};

const createNotEnumerableProperty = (prop) => {
	return Symbol(prop);	
};

const createProtoMagicObject = () => {
	function magicObj(){};
		magicObj.__proto__ = magicObj.prototype;
	return magicObj;
	
	
};


const incrementor = () => {
			
};


const asyncIncrementor = () => {};
const createIncrementer = () => {
	function* counter(){
			let count = 1;
		    while (count < 10)
				yield count++;
			}
			
	return counter();	
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
	let promise = new Promise((resolve) => {
	setTimeout(() => {
    resolve(param);
  }, 1001);
});
return promise;
};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;