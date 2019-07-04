function setup()
{
    let nn = new NeutronNetwork(2,2,1);
    let input = [1,0];
    let target = [1]
    //let output = nn.feedforward(input);
    nn.train(input, target);
    
    
}