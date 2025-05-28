#!/usr/bin/env bun

import { Command } from 'commander'
import inquirer from 'inquirer'
import chalk from 'chalk'
import generateEmbeddings from '@/lib/generate-embeddings'

const program = new Command()

program
  .command('.')
  .description('Gera embeddings para o arquivo de teste')
  .action(async () => {
    const currentPath = process.cwd()

    const answers = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'generate',
        message: `Deseja gerar os embeddings da pasta ${chalk.blue(currentPath)}? ${chalk.yellow(
          'Essa operação pode levar algum tempo.'
        )}`,
      },
    ])

    if (!answers.generate) {
      console.log(chalk.red('Operação cancelada pelo usuário.'))
      process.exit(0)
    }

    console.log(chalk.blue('Iniciando a geração dos embeddings...'))

    const embeddings = await generateEmbeddings(currentPath)

    if (!embeddings) {
      console.log(chalk.red('Erro ao gerar os embeddings.'))
      process.exit(1)
    }

    console.log(chalk.green('Embeddings gerados com sucesso!'))
  })

program.parse()
