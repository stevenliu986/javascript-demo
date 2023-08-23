// ^,$: ^: 表示以什么开头。$: 表示以什么结尾

// ^,$都不加：字符串中包含符合规则的内容即可
let reg1 = /\d+/;
// ^,$都加：字符串只能是和规则一致的内容
let reg2 = /^\d+$/;

// 最简单的验证手机号的正则
let reg3 = /^1\d{10}$/;
