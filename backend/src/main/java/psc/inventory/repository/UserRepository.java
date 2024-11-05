package psc.inventory.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import psc.inventory.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
