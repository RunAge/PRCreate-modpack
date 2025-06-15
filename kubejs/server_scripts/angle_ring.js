ServerEvents.recipes(event => {
  event.remove({ output: "angelring:diamond_ring" });
  event.shaped("angelring:diamond_ring", [
    " D ",
    "DCD",
    " D "
  ], {
    D: "minecraft:diamond_block",
    C: "create_jetpack:jetpack",
  });
});