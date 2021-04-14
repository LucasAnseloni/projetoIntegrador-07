package com.dagleProject.dagle.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.dagleProject.dagle.model.Categoria;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Long>{
	public List<Categoria> findAllByNomeContainingIgnoreCase (String nome);
	
	@Modifying
	@Query(value = "UPDATE tb_categoria set nome = :nome, setor = :setor where id = :idCategoria", nativeQuery = true)
	 public void updateCategoria(@Param("nome") String nome,@Param("setor") String setor,@Param("idCategoria") long idCategoria);

}
