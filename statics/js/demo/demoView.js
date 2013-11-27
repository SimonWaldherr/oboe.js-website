
function stampFromTemplate(templateId) {
    return $('template#' + templateId).children().clone();
}

Packet.new.on( function(newPacket){
    
    console.log('__new packet created', newPacket);
    
    new PacketView(newPacket);   
    
});

function PacketView(packet) {

    var packetDom = stampFromTemplate('packet');
    packetDom.attr('class', 'packet ' + packet.name);
    PacketView.container.append(packetDom);
    
    packet.events('move').on(function(location, dur){
        console.log(packet, 'is moving to', location, 'and will take', dur);
        
    });
    
    packet.events('done').on(function(){
        packetDom.remove();        
    });
    
}

PacketView.container = $('.packets');