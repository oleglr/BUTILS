export default (tick1, tick2) =>
    !tick1 && tick1 === tick2 ||
    !!tick1 && !!tick2 && tick1.epoch === tick2.epoch && tick1.quote === tick2.quote;
