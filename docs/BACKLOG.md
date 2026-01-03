> Proveniência e Autoria: Este documento integra o projeto Galeria Moralus OSS (licença MIT).
> Última atualização: 2 de janeiro de 2026

# Sistema de Comentários - Planejamento Futuro

## Contexto

Este documento registra o planejamento para implementação futura de comentários nos posts do blog, quando o site tiver tráfego suficiente para justificar o recurso.

## Objetivos

- Engajamento e feedback de leitores
- Canal assíncrono de dúvidas técnicas (complementar ao WhatsApp)
- Iteração e melhoria de conteúdo educativo
- Construção de comunidade

## Quando Implementar

✅ **Sinais para começar:**

- Tráfego consistente (>100 visitas/mês)
- Perguntas recorrentes no WhatsApp sobre posts específicos
- Necessidade de feedback estruturado por artigo
- Tempo disponível para moderação

❌ **Evitar se:**

- Tráfego ainda muito baixo (seção vazia desmotiva)
- Falta de tempo para moderar spam
- Foco é catálogo estático de recursos

## Opções de Implementação

### 1. Giscus (Recomendado para início rápido) ⭐

**Prós:**

- Integração com GitHub Discussions
- Sem backend próprio / sem banco de dados
- Identidade via GitHub (público já está familiarizado)
- Privacidade melhor que Disqus
- Zero custo
- Script leve (~10KB)

**Contras:**

- Requer conta GitHub para comentar
- Limitado a estrutura de Discussions

**Implementação:**

1. Habilitar GitHub Discussions no repositório `ossmoralus/galeria`
2. Instalar script no `app/blog/[slug]/page.tsx`
3. Mapear `data-term` com slug do post
4. Configurar tema dark (consistente com site)

**Script exemplo:**

```tsx
<script
  src="https://giscus.app/client.js"
  data-repo="ossmoralus/galeria"
  data-repo-id="[ID]"
  data-category="Blog Comments"
  data-category-id="[ID]"
  data-mapping="pathname"
  data-strict="0"
  data-reactions-enabled="1"
  data-emit-metadata="0"
  data-input-position="bottom"
  data-theme="dark"
  data-lang="pt"
  crossorigin="anonymous"
  async
></script>
```

### 2. Utterances (Mais simples)

**Prós:**

- Usa GitHub Issues como backend
- Ultra-simples, leve (<1KB)
- Rápido de implementar

**Contras:**

- Cada comentário vira uma Issue (pode poluir tracker)
- Menos estrutura de moderação
- Mistura bugs/features com comentários

**Quando usar:** Projeto muito pequeno, teste de conceito

### 3. Self-Hosted (Controle Total)

**Prós:**

- Controle completo (moderação, features, dados)
- Sem dependência de terceiros
- Customização total de UX

**Contras:**

- Requer backend (Prisma + DB)
- Necessita sistema anti-spam robusto
- Manutenção e backup
- Mais tempo de desenvolvimento

**Stack sugerida:**

- Next.js Server Actions
- Prisma ORM
- SQLite (dev) → PostgreSQL (prod via Vercel/Supabase)
- Rate limiting (Upstash Redis)

**Modelo de dados:**

```prisma
model PostComment {
  id            String   @id @default(cuid())
  postSlug      String
  authorName    String
  authorEmail   String?  // opcional, para notificações
  content       String   @db.Text
  status        String   @default("pending") // pending | approved | rejected
  ipHash        String
  userAgentHash String
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  @@index([postSlug, status])
  @@index([createdAt])
}
```

**Segurança obrigatória:**

- Rate limit: 1 comentário a cada 5 segundos por IP
- Honeypot field (input oculto que bots preenchem)
- Sanitização HTML (strip scripts, permitir apenas texto + links validados)
- Filtro de links excessivos (máx 2 por comentário)
- Lista de termos bloqueados (spam keywords)
- Status "pending" por padrão (moderação antes de exibir)
- Hash IP + User-Agent para rastrear abuso sem armazenar dados pessoais

**Fluxo:**

1. Form RSC → Server Action `submitComment(formData)`
2. Validação: comprimento 10-1000 chars, email opcional válido
3. Salvar como `pending` com hashes
4. Revalidate cache da página
5. Dashboard admin para aprovar/rejeitar
6. Notificação para canal comunitário (opcional)

### 4. Headless SaaS (Escalável)

**Opções:** Supabase, Xata, PlanetScale + API own

**Prós:**

- Escala automática
- Autenticação OAuth pronta
- Backup gerenciado

**Contras:**

- Custo mensal conforme crescimento
- Complexidade inicial maior
- Dependência de terceiros

**Quando usar:** Tráfego >1k visitas/mês, múltiplos autores

### 5. Serverless Feedback (Híbrido)

**Conceito:** Form → GitHub Issue via API → Moderação manual → Exibir

**Prós:**

- Controle de spam antes de expor
- Usa GitHub como backend gratuito
- Simples de implementar

**Contras:**

- Não é tempo real
- Atraso entre envio e publicação

### 6. Sem Comentários (Alternativa)

**Estratégia:** CTA final dos posts → "Fale no WhatsApp" + link direto

**Prós:**

- Zero manutenção adicional
- Canal único de interação (WhatsApp já existe)
- Menos superfície de ataque (spam)

**Contras:**

- Perde feedback público estruturado por artigo
- WhatsApp é mais efêmero (busca limitada)

## Recomendação Final

**Fase 1 (Atual):** Sem comentários. CTA para WhatsApp.

**Fase 2 (Tráfego >50 visitas/mês):** Implementar Giscus (rápido, zero backend).

**Fase 3 (Tráfego >500 visitas/mês):** Avaliar migração para self-hosted se precisar:

- Moderação granular (filtros avançados, auto-aprovação confiável)
- Métricas próprias (engagement, resposta média)
- Features exclusivas (upvotes, perfis, notificações push)

**Fase 4 (Tráfego >2k visitas/mês):** Considerar Headless SaaS com OAuth se auto-hospedagem virar gargalo.

## Checklist de Implementação (Quando chegar a hora)

### Pré-requisitos

- [ ] Tráfego consistente (>50 visitas/mês)
- [ ] Tempo disponível para moderar (15min/dia)
- [ ] Decisão: Giscus vs Self-hosted
- [ ] Discussões habilitadas no GitHub (se Giscus)

### Implementação Giscus (Estimativa: 1h)

- [ ] Habilitar Discussions no repo GitHub
- [ ] Obter IDs em https://giscus.app/
- [ ] Criar componente `app/components/Comments.tsx`
- [ ] Integrar em `app/blog/[slug]/page.tsx`
- [ ] Testar com post dummy
- [ ] Ajustar tema/cores dark
- [ ] Adicionar fallback "Fale no WhatsApp"
- [ ] Documentar em README

### Implementação Self-Hosted (Estimativa: 8-12h)

- [ ] Schema Prisma com modelo PostComment
- [ ] Migrations SQLite local
- [ ] Server Action `submitComment` com validações
- [ ] Componente Form + listagem de comentários
- [ ] Rate limiting (Upstash Redis ou in-memory dev)
- [ ] Honeypot anti-spam
- [ ] Sanitização HTML (DOMPurify ou strip-tags)
- [ ] Status pending + painel moderação admin
- [ ] Notificação para canal comunitário
- [ ] Testes de carga (simular 100 comentários)
- [ ] Deploy DB Postgres (Vercel/Supabase)
- [ ] Backup automático semanal
- [ ] GDPR: política de dados + botão deletar

### Moderação e Manutenção

- [ ] Definir regras da comunidade (tom, off-topic, spam)
- [ ] Rotina diária: revisar pending (5-10min/dia)
- [ ] Métricas: comentários/post, tempo resposta, spam rate
- [ ] Revisar trimestral: vale a pena ou WhatsApp basta?

## Recursos e Links

- **Giscus:** https://giscus.app/
- **Utterances:** https://utteranc.es/
- **Prisma Docs:** https://www.prisma.io/docs
- **Next.js Server Actions:** https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
- **DOMPurify:** https://github.com/cure53/DOMPurify
- **Upstash Redis:** https://upstash.com/ (rate limiting)

## Notas de Decisão (2 de dezembro de 2025)

**Contexto atual:**

- Site novo, sem tráfego significativo ainda
- WhatsApp já configurado como canal principal
- Foco atual: criar conteúdo de qualidade, não infraestrutura de interação

**Decisão:** Postergar comentários até haver demanda real. Evitar seção vazia que desmotiva visitantes.

**Revisão:** Avaliar novamente em 3-6 meses conforme métricas de tráfego e feedback no WhatsApp.

---

**Última atualização:** 2 de dezembro de 2025
**Responsável:** Moralus OSS
**Status:** Planejamento - Não implementado
