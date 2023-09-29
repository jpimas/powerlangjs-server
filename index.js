import Bootstrapper from '../bootstrapper.js';
import LMRSmallInteger from '../interpreter/LMRSmallInteger.js';
import WebsideServer from '../PowerlangJS-Webside/WebsideServer.js';

var bootstrapper = new Bootstrapper();
bootstrapper.loadKernelFile("image-segments/Kernel.json");
const runtime = bootstrapper.runtime;

const number = new LMRSmallInteger();
number._value = -1;
runtime.sendLocal_to_("yourself", number )
// module = bootstrapper.loadModule(process.argv[2]);
const result = runtime.sendLocal_to_("isSmallInteger", number);
let obj = runtime.sendLocal_to_("class", result);
obj = runtime.sendLocal_to_("superclass", obj);
obj = runtime.sendLocal_to_("superclass", obj);
obj = runtime.sendLocal_to_("superclass", obj);
console.log(obj.toString());
obj = runtime.sendLocal_to_("allSubclasses", obj );

const webside = new WebsideServer("localhost", 9005, runtime);
webside.start();

//const str = runtime.sendLocal_to_("printString", obj);
//console.log("got:", str.toString());