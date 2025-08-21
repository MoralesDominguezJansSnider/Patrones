package com.example.Banckend.items;


import org.springframework.web.bind.annotation.*;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/api/items")
@CrossOrigin(origins = "http://localhost:5173") // habilita CORS desde el front
public class ItemController {

    private final Map<Long, Item> db = new ConcurrentHashMap<>();
    private final AtomicLong seq = new AtomicLong();

    @GetMapping
    public Collection<Item> all() {
        return db.values();
    }

    @PostMapping
    public Item create(@RequestBody Item in) {
        long id = seq.incrementAndGet();
        Item item = new Item(id, in.getNombre());
        db.put(id, item);
        return item;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        db.remove(id);
    }
}
