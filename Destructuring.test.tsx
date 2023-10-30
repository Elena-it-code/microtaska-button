export type ManTypeProps = {
    name: string
    age: number
    address: {
        street: string
        dom: number
        float: number
    }
}


test('', () => {
    let props: ManTypeProps = {
        name: 'Lena',
        age: 33,
        address: {
            street: 'Baskov Pereylok',
            dom: 23,
            float: 6
        }
    }

    //const name = props.name;
    //const age = props.age;

    const {name,age} = props;

    expect(name).toBe('Lena')
    expect(age).toBe(33)

})