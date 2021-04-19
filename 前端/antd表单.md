表单实例上的方法

1.
getFieldError	获取对应字段名的错误信息(单个)

就是表单错误信息的字段，form.getFieldError('字段名')

2.
getFieldsError	获取一组字段名对应的错误信息，返回为数组形式 (多个)
就是表单错误信息的字段，form.getFieldsError('字段名数组')  返回数组



3.
getFieldInstance	获取对应字段实例(单个)
就是获取对应表单元素实例   form.getFieldInstance('字段名')


4.
getFieldsValue	获取一组字段名对应的值，会按照对应结构返回。默认返回现存字段值，当调用 getFieldsValue(true) 时返回所有值
form.getFieldsValue('字段名，字段名数组',true)

就是获取表单值。可以获取单个/数组/全部


5.getFieldValue	获取对应字段名的值(和上一个一样，不过是单个)
form.getFieldsValue('字段名')


6.isFieldsTouched  检查一组字段是否被用户操作过，allTouched 为 true 时检查是否所有字段都被操作过 

form.getFieldsValue('字段名[]',allTouched:true|false)
就是可以检查这个表单项是否被动过，只要被动过就能检测出来


7.isFieldTouched	检查对应字段是否被用户操作过
和上面一样，这个是操作单个的


8.isFieldValidating	检查一组字段是否正在校验


9.resetFields	重置一组字段到 initialValues
注意，是把现在的值重置成initialValues